using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Team_collaboration.Pages;

namespace TestTeam_collaboration
{
	public class TestDashboards
	{
		[Fact]
		public void ViewIsCreated()
		{
			using var ctx = new TestContext();
			ctx.JSInterop.Mode = JSRuntimeMode.Loose;
			ctx.Services.AddIgniteUIBlazor(
				typeof(IgniteUI.Blazor.Controls.IgbListModule),
				typeof(IgniteUI.Blazor.Controls.IgbCardModule),
				typeof(IgniteUI.Blazor.Controls.IgbIconButtonModule),
				typeof(IgniteUI.Blazor.Controls.IgbRippleModule),
				typeof(IgniteUI.Blazor.Controls.IgbButtonModule));
			var componentUnderTest = ctx.RenderComponent<Dashboards>();
			Assert.NotNull(componentUnderTest);
		}
	}
}