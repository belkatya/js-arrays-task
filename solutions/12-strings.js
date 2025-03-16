// BEGIN
export default (text, words) => {
    let parts = text.split(' ');
    for (let i = 0; i < words.length; i += 1) {
        if (parts.includes(words[i])) {
            for (let j = 0; j < parts.length; j += 1) {
                if (parts[j] === words[i]) {
                    parts[j] = '$#%!';
                }
            }
        }
    }
    return parts.join(' ');
}
// END