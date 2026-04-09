using Microsoft.AspNetCore.HttpOverrides;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.AddSimpleConsole(options =>
{
    options.SingleLine = true;
    options.TimestampFormat = "";
});

// Add services to the container.
builder.Logging.AddFilter("Microsoft", LogLevel.None);
builder.Logging.AddFilter("System", LogLevel.None);
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

// MELHORA NA LEITURA DE LOGS
app.Use(async (context, next) =>
{
    await next();

    var path = context.Request.Path.Value?.ToLower() ?? "";

    if (!path.StartsWith("/img") &&
        !path.StartsWith("/css") &&
        !path.StartsWith("/js") &&
        !path.StartsWith("/lib") &&
        !path.Contains("."))
    {
        var ip = context.Connection.RemoteIpAddress?.ToString();
        var status = context.Response.StatusCode;

        Console.WriteLine($"IP {ip} acessou {path} [{status}]");
    }
});

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

// 7070 para ambiente de desenvolvimento e 8075 para produção
// app.Run("https://0.0.0.0:7070"); 
// app.Run("https://0.0.0.0:8075"); 
app.Run("http://0.0.0.0:8075");