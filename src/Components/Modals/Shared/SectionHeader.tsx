import React from "react";
import { Typography } from "@material-ui/core";
import { Flex } from "../../Flex";

export const SectionHeader = ({ label }: { label: string }) => {
    return (
        <Flex style={{ width: "100%", padding: "10px 0px" }}>
            <Typography variant="h6" style={{ color: "black" }}>
                {label}
            </Typography>
        </Flex>
    );
};
