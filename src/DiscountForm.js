import "@shopify/polaris/build/esm/styles.css";

import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
    AppProvider,
    Page,
    Button,
    Layout,
    Text,
} from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import {
    ArrowLeftIcon,
} from "@shopify/polaris-icons";
import PreviewTable from "./component/PreviewTable";
import GeneralForm from "./component/GeneralForm";
import VolumnForm from "./component/VolumnForm";

const discountTypeOptions = [
    { label: 'None', value: 'None' },
    { label: '% discount', value: '% discount' },
    { label: 'Discount / each', value: 'Discount / each' },
]

// let renderCount = 0

const DiscountForm = () => {
    // renderCount++

    const {
        control,
        watch,
        getValues,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            campaign: "",
            title: "",
            description: "",
            options: [
                {
                    quantity: 1,
                    amount: "",
                    title: "",
                    discountType: discountTypeOptions[0].value,
                    suffix: "",
                },
                {
                    quantity: 2,
                    amount: "",
                    title: "",
                    discountType: discountTypeOptions[0].value,
                    suffix: "",
                },
            ]
        }
    });

    const { fields: options, append: appendOption, remove: removeOption } = useFieldArray({
        control,
        name: 'options'
    });

    const watchOptions = watch("options")

    // useEffect(() => {
    //     const subscription = watch((value) =>
    //         console.log(value)
    //     )
    //     return () => subscription.unsubscribe()
    // }, [watch])

    const previewHeadings = ["Title", "Quantity", "Amount", "Discount Type"];

    const previewRows = watchOptions.map((option) => [
        option.title,
        option.quantity,
        `${option.amount} ${option.suffix}`,
        option.discountType,
    ])

    const onSubmit = async (data) => {
        // console.log('data====', data);
        // console.log('getValues()====', getValues());
        alert(`send form \n` + JSON.stringify(data));
        // alert(`send form \n` + JSON.stringify(JSON.stringify(getValues())));
        try {
            const response = await fetch("https://example.com/discount-form", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <AppProvider i18n={enTranslations}>
            <Page fullWidth>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Text variant="headingLg" as="h1">
                        <Button tone="critical" size="medium">
                            <Icon source={ArrowLeftIcon} tone="base" />
                        </Button>
                        {"  "}Create volumn discount 
                        {/* ({renderCount / 2}) */}
                    </Text>
                    {/* <Text variant="headingLg" as="h1"> */}
                        {/* {JSON.stringify(watchOptions)} */}
                        {/* {JSON.stringify(watchForm)} */}
                    {/* </Text> */}

                    <Layout>
                        <Layout.Section>
                            <GeneralForm
                                control={control}
                                errors={errors}
                            />

                            <VolumnForm
                                control={control}
                                errors={errors}
                                options={options}
                                value={getValues().options}
                                watchOptions={watchOptions}

                                appendOption={appendOption}
                                removeOption={removeOption}
                                discountTypeOptions={discountTypeOptions}
                            />
                        </Layout.Section>
                        <Layout.Section variant="oneThird">
                            <PreviewTable
                                previewHeadings={previewHeadings}
                                previewRows={previewRows}
                            />
                        </Layout.Section>
                    </Layout>
                    <Button submit>Save</Button>
                </form>
            </Page>
        </AppProvider>
    );
};

export default DiscountForm;