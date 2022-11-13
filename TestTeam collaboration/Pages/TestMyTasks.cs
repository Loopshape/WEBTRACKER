using Bunit;
using Microsoft.Extensions.DependencyInjection;
using Team_collaboration.Pages;

namespace TestTeam_collaboration
{
	public class TestMyTasks
	{
		[Fact]
		public void ViewIsCreated()
		{
			using var ctx = new TestContext();
			ctx.JSInterop.Mode = JSRuntimeMode.Loose;
			ctx.Services.AddIgniteUIBlazor(
				typeof(IgniteUI.Blazor.Controls.IgbBadgeModule),
				typeof(IgniteUI.Blazor.Controls.IgbListModule),
				typeof(IgniteUI.Blazor.Controls.IgbButtonModule),
				typeof(IgniteUI.Blazor.Controls.IgbRippleModule),
				typeof(IgniteUI.Blazor.Controls.IgbIconButtonModule),
				typeof(IgniteUI.Blazor.Controls.IgbAvatarModule),
				typeof(IgniteUI.Blazor.Controls.IgbCalendarModule));
			var componentUnderTest = ctx.RenderComponent<MyTasks>();
			Assert.NotNull(componentUnderTest);
		}
	}
}