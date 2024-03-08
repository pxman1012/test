import { Controller } from "react-hook-form";
import {
    TextField,
    Select,
    Button,
    Card,
    Text,
    Divider,
    Badge,
    Grid,
} from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import { DeleteIcon, PlusCircleIcon } from "@shopify/polaris-icons";

const VolumnForm = ({
    control,
    errors,
    options,
    value,
    appendOption,
    removeOption,
    discountTypeOptions,
}) => {

    // console.log('options====', options)
    // console.log('value====', value)
    return (
        <Card>
            <Text variant="headingLg" as="h2">
                Volumn discount rule
            </Text>
            {options.map((option, index) => (
                <div
                    key={option.id}
                    title={`Option ${option.id}`}
                    style={{
                        padding: "20px 0",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: -15,
                            right: -15,
                        }}
                    >
                        <Divider />
                        <Badge
                            tone="critical-strong"
                            style={{ background: "red", borderRadíu: "unset" }}
                        >
                            Option {index + 1}
                        </Badge>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button
                            variant="plain"
                            // onClick={() => handleDeleteOption(option.id)}
                            onClick={() => removeOption(index)}
                        >
                            <Icon source={DeleteIcon} tone="base" />
                        </Button>
                    </div>
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
                            <Controller
                                name={`options.${index}.title`}
                                control={control}
                                defaultValue=""
                                render={({ field, ref }) => (
                                    <TextField
                                        {...field}
                                        ref={ref}
                                        label="Title"
                                        error={errors.options?.[index]?.title?.message}
                                    />
                                )}
                                rules={{ required: "Title is required" }}
                            />
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
                            <Controller
                                name={`options.${index}.subTitle`}
                                control={control}
                                defaultValue=""
                                render={({ field, ref }) => (
                                    <TextField {...field} ref={ref} label="Subtitle" />
                                )}
                            />
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
                            <Controller
                                name={`options.${index}.label`}
                                control={control}
                                defaultValue=""
                                render={({ field, ref }) => (
                                    <TextField {...field} ref={ref} label="Label (optional)" />
                                )}
                            />
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
                            <Controller
                                name={`options.${index}.quantity`}
                                control={control}
                                defaultValue={option.quantity}
                                render={({ field, ref }) => (
                                    <TextField
                                        {...field}
                                        ref={ref}
                                        type="number"
                                        label="Quantity"
                                    />
                                )}
                            />
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
                            <Controller
                                name={`options.${index}.discountType`}
                                control={control}
                                defaultValue={discountTypeOptions[0].value}
                                render={({ field, ref }) => (
                                    <Select
                                        {...field}
                                        ref={ref}
                                        label="Discount type"
                                        options={discountTypeOptions}
                                    />
                                )}
                            />
                        </Grid.Cell>
                        {/* {option.discountType !== discountTypeOptions[0].value && ( */}
                        {value[index].discountType !== discountTypeOptions[0].value && (
                            <Grid.Cell columnSpan={{ xs: 4, sm: 3, md: 3, lg: 4, xl: 4 }}>
                                <Controller
                                    name={`options.${index}.amount`}
                                    control={control}
                                    defaultValue={option.amount}
                                    render={({ field, ref }) => (
                                        <TextField
                                            {...field}
                                            ref={ref}
                                            type="number"
                                            label="Amount"
                                            suffix={option.suffix}
                                            error={errors.options?.[index]?.amount?.message}
                                        />
                                    )}
                                    rules={{
                                        required: "Amount is required",
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "Invalid amount",
                                        },
                                    }}
                                />
                            </Grid.Cell>
                        )}
                    </Grid>
                </div>
            ))}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: -15,
                    right: -15,
                }}
            >
                <Divider />
            </div>
            <Button
                fullWidth
                variant="primary"
                tone="critical"
                icon={<Icon source={PlusCircleIcon} tone="base" />}
                // onClick={handleAddOption}
                onClick={() =>
                    appendOption({
                        // id: 0,
                        quantity: 1,
                        amount: "",
                        title: "",
                        discountType: discountTypeOptions[0].value,
                        suffix: "",
                    })
                }
            >
                Add Option
            </Button>
        </Card>
    );
};

export default VolumnForm;
