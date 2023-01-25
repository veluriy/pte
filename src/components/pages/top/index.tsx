import type { FC } from "react";
import { Header } from "../../header";
import {
    Box,
    Card,
    Link,
    List,
    ListIcon,
    ListItem,
    Text,
    theme
} from "@chakra-ui/react";
import { AboutMe } from "./about";
import { Item } from "./item";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { MyHead } from "../../head";

export const TopPagePresenter: FC = () => {
    return (
        <>
            <MyHead title="pteのサイト" />
            {/*<Header />*/}
            <Card m="16px 16px 0" boxShadow="none">
                <Text
                    fontSize="3xl"
                    color={theme.colors.purple[800]}
                    opacity="80%"
                    borderBottom={`solid 1px ${theme.colors.purple[800]}77`}
                    pb="1"
                >
                    About Me
                </Text>
                <AboutMe
                    features={[
                        "19yo (2022/11)",
                        "studying mathematics",
                        "programmer",
                        "そろそろ日本語で書きますね"
                    ]}
                />
                <Box mt="16px" mx="32px">
                    <Item
                        title="最近は..."
                        body="最近は主に有機化学を学んでいます。あと日記帳の実装も。"
                    />
                </Box>
                <Box mt="16px" mx="32px">
                    <Item
                        title="趣味について"
                        body="息抜きに筋トレをすることが増えました。"
                    />
                </Box>
                <Box m="16px">
                    <Text
                        color={theme.colors.purple[900]}
                        opacity="80%"
                        fontSize="3xl"
                        borderBottom={`solid 1px ${theme.colors.purple[900]}77`}
                    >
                        Links
                    </Text>
                    <List mx="16px" my="8px">
                        <ListItem display="flex" alignItems="center">
                            <ListIcon
                                as={FiGithub}
                                color={theme.colors.purple[900]}
                            />
                            <Link
                                href="https://github.com/ptlx"
                                color={theme.colors.purple[900]}
                            >
                                Github
                            </Link>
                        </ListItem>
                        <ListItem display="flex" alignItems="center">
                            <ListIcon
                                as={FiTwitter}
                                color={theme.colors.purple[900]}
                            />
                            <Link
                                href="https://twitter.com/plockedgirl"
                                color={theme.colors.purple[900]}
                            >
                                Twitter
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Card>
        </>
    );
};
