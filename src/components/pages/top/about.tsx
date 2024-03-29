import { Box, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import type { FC } from "react";
import { theme } from "../../../theme/theme";
import classes from "./style.module.css";
import { MdCheckCircle } from "react-icons/md";

type Props = {
    features: string[];
};

export const AboutMe: FC<Props> = (props) => {
    const featuresChildren = props.features.map((feature) => {
        return (
            <ListItem key={feature} display="flex">
                <ListIcon as={MdCheckCircle} color="purple.700" mt="4px" />
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
            <Text
                fontSize="xl"
                color={theme.colors.purple[900]}
                fontWeight="bold"
            >
                pte
            </Text>
            <Box display="flex">
                <Box>
                    <img
                        src="patchouli.jpg"
                        alt="アイコン"
                        width="100"
                        height="100"
                        className={classes.icon}
                    />
                </Box>

                <List pl="24px">{featuresChildren}</List>
            </Box>
        </Stack>
    );
};
