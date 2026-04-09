using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace webAppMilbr.Pages
{
    public class Politica_e_privacidade : PageModel
    {
        private readonly ILogger<Politica_e_privacidade> _logger;

        public Politica_e_privacidade(ILogger<Politica_e_privacidade> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}