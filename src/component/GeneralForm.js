import { Controller } from "react-hook-form";
import { TextField, Card, Text } from "@shopify/polaris";

const GeneralForm = ({ control, errors }) => {
    return (
        <Card>
            <Text variant="headingLg" as="h2">
                General
            </Text>

            <Controller
                name={`campaign`}
                control={control}
                defaultValue=""
                render={({ field, ref }) => (
                    <TextField
                        {...field}
                        ref={ref}
                        label="Campaign"
                        error={errors?.campaign?.message}
                    />
                )}
                rules={{ required: "Campaign is required" }}
            />
            <Controller
                name={`title`}
                control={control}
                defaultValue=""
                render={({ field, ref }) => (
                    <TextField {...field} ref={ref} label="Title" />
                )}
            />
            <Controller
                name={`description`}
                control={control}
                defaultValue=""
                render={({ field, ref }) => (
                    <TextField {...field} ref={ref} label="Description" />
                )}
            />
        </Card>
    );
};

export default GeneralForm;
