
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace webAppMilbr.Pages
{
    public class PromocoesModel : PageModel
    {
        private readonly ILogger<Index> _logger;

        public PromocoesModel(ILogger<Index> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}