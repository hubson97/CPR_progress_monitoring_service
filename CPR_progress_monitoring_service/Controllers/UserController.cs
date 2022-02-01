using CPR_progress_monitoring_service.Interfaces;
using CPR_progress_monitoring_service.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CPR_progress_monitoring_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("token")]
        public async Task<IActionResult> GetTokenAsync(TokenRequestModel model)
        {
            var result = await _userService.GetTokenAsync(model);
            if (!result.IsAuthenticated)
                return Unauthorized(result);
            return Ok(result);
        }


        [HttpPost]
        public async Task<ActionResult> RegisterAsync(RegisterModel model)
        {
            var result = await _userService.RegisterAsync(model);
            return Ok(result);
        }


        [HttpPost("addrole")]
        public async Task<IActionResult> AddRoleAsync(AddRoleModel model)
        {
            var result = await _userService.AddRoleAsync(model);
            return Ok(result);
        }

    }
}



