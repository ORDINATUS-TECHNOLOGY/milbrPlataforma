using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace webAppMilbr.Pages
{
    public class Processos : PageModel
    {
        private readonly ILogger<Processos> _logger;

        public Processos(ILogger<Processos> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}