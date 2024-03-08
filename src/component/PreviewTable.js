import React from 'react'
import {
    Card,
    DataTable,
    Text,
} from "@shopify/polaris";

const PreviewTable = ({ previewHeadings, previewRows }) => {
    return (
        <Card title="Preview" sectioned>
            <Text variant="headingLg" as="h2">
                Preview
            </Text>
            <Text as="p" fontWeight="bold" alignment="center">
                Buy more and save
            </Text>
            <Text as="p" fontWeight="medium">
                Apply for all products in store
            </Text>
            <DataTable
                columnContentTypes={["text", "numeric", "text", "text"]}
                headings={previewHeadings}
                rows={previewRows}
            />
        </Card>
    )
}

export default PreviewTable