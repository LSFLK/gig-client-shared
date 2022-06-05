export function highlightText(text, linkRoute, tags = []) {
    if (!tags?.length) return text;
    const matches = [...text.matchAll(new RegExp(tags.join("|"), "ig"))];
    const startText = text.slice(0, matches[0]?.index);
    let result = (
        "<span>" + startText +
        matches.map((match, i) => {
            const startIndex = match.index;
            const currentText = match[0];
            const endIndex = startIndex + currentText.length;
            const nextIndex = matches[i + 1]?.index;
            const untilNextText = text.slice(endIndex, nextIndex);
            return "<span key='" + i + "'>" +
                "<a class='highlighted-link' href='" + linkRoute + encodeURI(currentText) + "'>" +
                "<span>" + currentText + "</span>" +
                "</a>"
                + untilNextText + "</span>"
        })
        + "</span>"
    );
    return result.split(">,<").join("><");
}