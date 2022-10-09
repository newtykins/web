import { NextPage } from "next";
import TypewriterComponent from "typewriter-effect";

interface Props {
	text: string | string[];
	delay?: number;
}

const Typewriter: NextPage<Props> = ({ text, delay }) => {
	delay ??= 75;

	return <TypewriterComponent onInit={typewriter => {
		typewriter.changeDelay(delay);

		if (typeof text === 'string') {
			typewriter.typeString(text);
		} else {
			for (let string of text) {
				typewriter.typeString(string).pauseFor(25000).deleteAll(delay);
			}
		}

		typewriter.start();
	}} />
}

export default Typewriter;
