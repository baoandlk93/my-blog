import HomePage from "../components/page/HomePage";
import UserLayout from "../components/layout/UserLayout";
import Login from "../components/page/Login";
import Register from "../components/page/Register";
import BlogPage from "../components/page/BlogPage";

export const ROUT_DATA = [
	{ path: "/", element: HomePage, layout: UserLayout, children: null },
	{
		path: "/login",
		element: Login,
		layout: null,
		children: null,
	},
	{
		path: "/register",
		element: Register,
		layout: null,
		children: null,
	},
	{
		path: "/blogs",
		element: BlogPage,
		layout: UserLayout,
		children: null,
	},
];
