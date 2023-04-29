import type { FC } from "react";
import { TopPagePresenter } from "../components/pages/top";

export const Top: FC = () => {
    const contents = {
        features: [
            "19yo (2022/11)",
            "studying mathematics",
            "programmer",
            "そろそろ日本語で書きますね"
        ],
        about: [
            {
                title: "最近は...",
                content:
                    "最近は主に有機化学を学んでいます。あと日記帳の実装も。"
            },
            {
                title: "趣味について",
                content: "息抜きに筋トレをすることが増えました。"
            }
        ]
    };
    return <TopPagePresenter contents={contents} />;
};

export default Top;
