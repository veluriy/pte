import { List, ListItem, Stack, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { theme } from "../../theme/theme";

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
            backgroundColor={theme.colors.purple[100]}
            borderRadius={"16px"}
            mt="4"
        >
            <Text fontSize="xl" color={theme.colors.gray} fontWeight="bold">
                WHO?
            </Text>
            <List listStyleType="initial" pl="8">
                {featuresChildren}
            </List>
        </Stack>
    );
};
