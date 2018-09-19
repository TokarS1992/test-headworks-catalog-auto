export default function getRandomStr(lStr = 5) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < lStr; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
