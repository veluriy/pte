import type { FC } from "react";
import { Header } from "../header";
import { Box, Link, List, ListItem, Text, theme } from "@chakra-ui/react";
import classes from "./style.module.css";
import { AboutMe } from "./about";
import { Item } from "./item";

export const TopPagePresenter: FC = () => {
    return (
        <>
            {/*<Header />*/}
            <div className={classes.main}>
                <Text
                    fontSize="3xl"
                    color={theme.colors.purple[800]}
                    borderBottomColor={theme.colors.purple[300]}
                    borderBottom="1px"
                    pb="1"
                    fontWeight="bold"
                >
                    TOP Page
                </Text>
                <AboutMe
                    features={[
                        "19yo (2022/11)",
                        "categorist (but...)",
                        "programmer",
                        "そろそろ日本語で書きますね"
                    ]}
                />
                <Box my="16px" mx="32px">
                    <Item
                        title="最近は..."
                        body="数学基礎論を少しやっています。あと有機化学はじめました。"
                    />
                </Box>
                <Box my="16px" mx="32px">
                    <Item
                        title="趣味について"
                        body="筋トレが好きです。最近は運動がマイブーム。"
                    />
                </Box>
                <Box m="16px">
                    <Text
                        color={theme.colors.purple[900]}
                        fontSize="3xl"
                        borderBottom="1px"
                    >
                        Links
                    </Text>
                    <List mx="32px" my="8px" listStyleType="initial">
                        <ListItem>
                            <Link href="https://github.com/ptlx">Github</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/plockedgirl">
                                Twitter
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </div>
        </>
    );
};
