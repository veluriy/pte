import { Box, List, ListItem, propNames, Text } from "@chakra-ui/react";
import { FC } from "react";
import { theme } from "../../theme/theme";

type Props = {
    title: string;
    body: string;
};

export const Item: FC<Props> = (props) => {
    return (
        <>
            <Text color={theme.colors.purple[700]} fontSize="xl">
                {props.title}
            </Text>
            <Box mx="16px" my="8px">
                <Text>{props.body}</Text>
            </Box>
        </>
    );
};
