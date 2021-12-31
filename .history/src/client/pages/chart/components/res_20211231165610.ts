interface chartItem {
    id?: string | number;
    nickname: string;
    content: string;
    logo?: string;
    isMe: boolean;
    [property as string]: any;
}
export const chartList: Array<chartItem> = [
    {
        id: 1,
        nickname: 'Brunch this week?',
        content:
            "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        isMe: false,
    },
    {
        id: 2,
        nickname: 'Birthday Gift',
        content: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
        isMe: false,
    },
    {
        id: 3,
        nickname: 'Recipe to try',
        content:
            'I am try out this new BBQ recipe, I think this might be amazing',
        isMe: false,
    },
    {
        id: 4,
        nickname: 'Yes!',
        content: 'I have the tickets to the ReactConf for this year.',
        isMe: false,
    },
    {
        id: 5,
        nickname: "Doctor's Appointment",
        content:
            'My appointment for the doctor was rescheduled for next Saturday.',
        isMe: false,
    },
    {
        id: 6,
        nickname: 'Discussion',
        content: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
        isMe: false,
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        isMe: false,
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        isMe: false,
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        isMe: false,
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        isMe: false,
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        isMe: false,
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        isMe: false,
    },
];