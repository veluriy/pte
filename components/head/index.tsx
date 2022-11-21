import { FC } from "react";

type Props = {
    title: string;
};

export const Head: FC<Props> = (props) => {
    return (
        <head prefix="og: https://ogp.me/ns#">
            <meta charSet="utf-8" />
            <meta name="description" content="pteのサイト" />
            <meta property="og:title" content={props.title} />
            <meta
                property="og:description"
                content="pteの自己紹介などを掲載しているサイト"
            />
            <meta property="og:site_name" content="pteのサイト" />
            <meta property="og:locale" content="ja_JP" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{props.title}</title>
        </head>
    );
};
