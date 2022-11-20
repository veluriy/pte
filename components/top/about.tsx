import { Box, List, ListItem, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { FC } from "react";
import { theme } from "../../theme/theme";
import classes from "./style.module.css";

type Props = {
    features: string[];
};

export const AboutMe: FC<Props> = (props) => {
    const featuresChildren = props.features.map((feature) => {
        return (
            <ListItem key={feature}>
                <Text fontSize="md" color={theme.colors.purple[700]}>
                    {feature}
                </Text>
            </ListItem>
        );
    });
    return (
        <Stack
            direction="column"
            p={4}
            backgroundColor={theme.colors.purple[50]}
            borderRadius={"16px"}
            borderColor={theme.colors.purple[300]}
            border="purple"
            mt="4"
        >
            <Text fontSize="xl" color={theme.colors.gray} fontWeight="bold">
                pte
            </Text>
            <Box display="flex">
                <Box>
                    <img
                        src="/patchouli.jpg"
                        alt="アイコン"
                        width="100"
                        height="100"
                        className={classes.icon}
                    />
                </Box>

                <List listStyleType="initial" pl="40px">
                    {featuresChildren}
                </List>
            </Box>
        </Stack>
    );
};
