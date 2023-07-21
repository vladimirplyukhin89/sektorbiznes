import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { URL } from "../constants/index";
import { Post } from "../models/index";

export const serverApi = createApi({
	reducerPath: "posts",
	baseQuery: fetchBaseQuery({
		baseUrl: URL,
	}),
	endpoints: (builder) => ({
		searchPosts: builder.query<Post[], string>({
			query: (search: string) => `posts/${search}`,
		}),
	}),
});

export const { useSearchPostsQuery } = serverApi;
