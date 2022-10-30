import type { FC } from "react";
import { Header } from "../header";
import { Text, theme } from "@chakra-ui/react";
import classes from "./style.module.css";
import { AboutMe } from "./about";

export const TopPagePresenter: FC = () => {
    return (
        <>
            <Header />
            <div className={classes.main}>
                <Text
                    fontSize="4xl"
                    color={theme.colors.purple[800]}
                    borderBottomColor={theme.colors.purple[400]}
                    borderBottom="1px"
                    pb="1"
                    fontWeight="bold"
                >
                    TOP Page
                </Text>
                <AboutMe
                    features={[
                        "novice categorist",
                        "student",
                        "programmer",
                        "そろそろ日本語で書きますね"
                    ]}
                />
            </div>
        </>
    );
};
