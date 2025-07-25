import { LangSwitcher } from "@components/LangSwitcher";
import { YouTubeEmbed } from "@components/youtube-embed";
import Head from "@docusaurus/Head";
import ConfigExample from "@site/src/components/ConfigExample";
import { Definition } from "@site/src/components/Definition";
import Admonition from "@theme/Admonition";
import type { MDXComponentsObject } from "@theme/MDXComponents";
import MDXA from "@theme/MDXComponents/A";
import MDXCode from "@theme/MDXComponents/Code";
import MDXDetails from "@theme/MDXComponents/Details";
import MDXHeading from "@theme/MDXComponents/Heading";
import MDXImg from "@theme/MDXComponents/Img";
import MDXLi from "@theme/MDXComponents/Li";
import MDXPre from "@theme/MDXComponents/Pre";
import MDXUl from "@theme/MDXComponents/Ul";
import Mermaid from "@theme/Mermaid";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React, { type ComponentProps } from "react";

const MDXComponents: MDXComponentsObject = {
	Head,
	details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
	Details: MDXDetails,
	code: MDXCode,
	a: MDXA,
	pre: MDXPre,
	ul: MDXUl,
	li: MDXLi,
	img: MDXImg,
	h1: (props: ComponentProps<"h1">) => <MDXHeading as="h1" {...props} />,
	h2: (props: ComponentProps<"h2">) => <MDXHeading as="h2" {...props} />,
	h3: (props: ComponentProps<"h3">) => <MDXHeading as="h3" {...props} />,
	h4: (props: ComponentProps<"h4">) => <MDXHeading as="h4" {...props} />,
	h5: (props: ComponentProps<"h5">) => <MDXHeading as="h5" {...props} />,
	h6: (props: ComponentProps<"h6">) => <MDXHeading as="h6" {...props} />,
	admonition: Admonition,
	mermaid: Mermaid,
	Definition,
	Tabs,
	TabItem,
	ConfigExample,
	YouTubeEmbed,
	LangSwitcher,
};

export default MDXComponents;
