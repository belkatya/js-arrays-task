// BEGIN (write your solution here)
export function getWeekends(type = 'long') {
    switch (type) {
        case 'long':
            return ['saturday','sunday'];
        case 'short':
            return ['sat','sun'];
    }
}
// END
