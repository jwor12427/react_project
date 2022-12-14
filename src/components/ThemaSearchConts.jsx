/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Loader } from ".";
//import themaSearchConts from "../utils/themaSearchConts.json";

const ThemaSearchConts = ({ list }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const config = {
			method: "get",
			url: `https://youtube-v31.p.rapidapi.com/playlists?id=${list}&part=snippet&maxResult=5`,
			headers: {
				// "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY2,
				"X-RapidAPI-Key": "7c4e5fb227mshf629ecb9207f84cp10864cjsnec505eb64f44",
				"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
			},
		};

		const fetchRestult = async () => {
			const response = await axios(config);
			setData(response.data);
		};
		fetchRestult();
	}, []);

	if (data?.items.length === 0 || !data) return <Loader />;

	return (
		<>
			<figure className="bgm">
				<Link
					to={`/themaSearch/${list}?src=${data.items[0].snippet.thumbnails.high.url}&${data.items[0].snippet.localized.title}`}
				>
					<img
						src={data.items[0].snippet.thumbnails.high.url}
						alt={data.items[0].snippet.localized.title}
					/>
					<figcaption>
						<p className="bgm__title">
							{data.items[0].snippet.localized.title}
						</p>
						<p className="bgm__tag">{data.items[0].snippet.channelTitle}</p>
					</figcaption>
				</Link>
			</figure>
		</>
	);
};

export default ThemaSearchConts;
