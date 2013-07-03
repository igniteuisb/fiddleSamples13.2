$(function () {
            $("#bulletgraph_default").igBulletGraph({
                height: "80px",
                width: "300px",
                
                showTooltip: true,

                ranges: [
                    {
                        brush: 'red',
                        name: 'bad',
                        startValue: 0,
                        endValue: 14
                    },
                    {
                        name: 'acceptable',
                        startValue: 14,
                        endValue: 25
                    },
                    {
                        name: 'good',
                        startValue: 25,
                        endValue: 30
                    }],
                minimumValue: 0, // default is 0
                maximumValue: 30, // default is 100
                actualValue: 26,
                targetValue: 22,
                transitionDuration: 500
            });

            $("#bulletgraph_semiTemplated").igBulletGraph({
                height: "200px",
                width: "80px", 
                orientation: "vertical",

                showTooltip: true,
                rangeTooltipTemplate: 'rangeTooltipTemplate1',
                actualValueTooltipTemplate: 'actualValueTooltipTemplate1',
                targetValueTooltipTemplate: 'targetValueTooltipTemplate1',

                ranges: [
                    {
                        name: 'bad',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        name: 'acceptable',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        name: 'good',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                actualValue: 85,
                targetValue: 77,
                interval: 10,
                transitionDuration: 500
            });

            $("#bulletgraph_templated").igBulletGraph({
                height: "80px",
                width: "300px",                

                showTooltip: true,
                rangeTooltipTemplate: 'rangeTooltipTemplate2',
                actualValueTooltipTemplate: 'actualValueTooltipTemplate2',
                targetValueTooltipTemplate: 'targetValueTooltipTemplate2',

                ranges: [
                    {
                        name: 'range1',
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        name: 'range2',
                        startValue: 50,
                        endValue: 80
                    },
                    {
                        name: 'range3',
                        startValue: 80,
                        endValue: 100
                    }
                ],
                targetValue: 90,
                labelInterval: 10,
                actualValue: 80,
                transitionDuration: 500
            }); 
        });