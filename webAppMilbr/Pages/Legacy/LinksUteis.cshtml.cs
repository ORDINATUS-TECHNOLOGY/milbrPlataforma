
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace webAppMilbr.Pages
{
    public class LinksUteisModel : PageModel
    {
        private readonly ILogger<Index> _logger;

        public LinksUteisModel(ILogger<Index> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}