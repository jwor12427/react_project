/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoveContext } from "../context/MoveContext";

const insList = ["피아노", "드럼", "관악기", "일렉기타", "현악기"];
function Ins() {
	const { setMoving, setKeyword, setData } = useContext(MoveContext);

	const onActive = (e) => {
		if (e.target.tagName === "A") {
			setMoving(true);
			// setData(null);
			setKeyword(e.target.textContent.replace("# ", ""));
			[...e.currentTarget.parentElement.children].forEach((li, index) => {
				li.classList.remove("active");
			});
			e.target.parentElement.classList.add("active");
			setMoving(false);
		}
	};

	return insList.map((m, index) => (
		<li
			key={m}
			onClick={onActive}
		>
			<Link to={`/tagSearch/악기/${m}`}># {m}</Link>
		</li>
	));
}

export default Ins;
