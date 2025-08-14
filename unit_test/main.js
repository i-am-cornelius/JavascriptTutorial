const subscription_tier = (tier) => {
    switch (tier) {
        case 'basic':
            return 1000;
        case 'standard':
            return 2000;
        case 'premium':
            return 3000;
        default:
            return 0;
    }
}

// The test in the test file will work without printing out below, this is just to see the output
console.log(subscription_tier('premium'));
console.log(subscription_tier('standard'));
console.log(subscription_tier('basic'));
console.log(subscription_tier('unknown'));
console.log(subscription_tier(null));
console.log(subscription_tier(undefined));
console.log(subscription_tier(''));
console.log(subscription_tier(123));
console.log(subscription_tier(true));



export { subscription_tier }