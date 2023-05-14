'use client';
import {Card, Grid, Text} from "@nextui-org/react";

export default function Page() {

    const MockItem = ({text}: { text: any }) => {
        return (
            <Card css={{h: "$20", $$cardColor: '$colors$primary'}}>
                <Card.Body>
                    <Text h6 size={15} color="white" css={{m: 0}}>
                        {text}
                    </Text>
                </Card.Body>
            </Card>
        );
    };
    return (
        <div className="space-y-8">
            <h1 className="text-xl font-medium text-gray-300">ABI Interaction</h1>
            <Grid.Container gap={2} justify="center">
                <Grid xs={5}>
                    <MockItem text="1 of 3"/>
                </Grid>

                <Grid xs={5}>
                    <MockItem text="2 of 3"/>
                </Grid>
            </Grid.Container>

            {/*<div className="space-y-10 text-white">*/}
            {/*    {demos.map((section) => {*/}
            {/*        return (*/}
            {/*            <div key={section.name} className="space-y-5">*/}
            {/*                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">*/}
            {/*                    {section.name}*/}
            {/*                </div>*/}

            {/*                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">*/}
            {/*                    {section.items.map((item) => {*/}
            {/*                        return (*/}
            {/*                            <Link*/}
            {/*                                href={`/${item.slug}`}*/}
            {/*                                key={item.name}*/}
            {/*                                className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"*/}
            {/*                            >*/}
            {/*                                <div className="font-medium text-gray-200 group-hover:text-gray-50">*/}
            {/*                                    {item.name}*/}
            {/*                                </div>*/}

            {/*                                {item.description ? (*/}
            {/*                                    <div*/}
            {/*                                        className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">*/}
            {/*                                        {item.description}*/}
            {/*                                    </div>*/}
            {/*                                ) : null}*/}
            {/*                            </Link>*/}
            {/*                        );*/}
            {/*                    })}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}