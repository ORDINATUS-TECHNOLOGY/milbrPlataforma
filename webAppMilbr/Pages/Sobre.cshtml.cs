using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace webAppMilbr.Pages
{
    public class Sobre : PageModel
    {
        private readonly ILogger<Sobre> _logger;

        public Sobre(ILogger<Sobre> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}