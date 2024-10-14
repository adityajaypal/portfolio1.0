const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
    {
        "name": "George: An Introspective",
        "width": 791,
        "height": 1024,
        "source": "/images/1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus vitae sapien ullamcorper rutrum nec sed enim. Donec id ligula dolor. Integer fringilla eget nisi sit amet lobortis. Nunc arcu mauris, aliquam non quam sed, vestibulum sollicitudin quam. Nunc viverra massa et dui euismod luctus. Donec tincidunt, est quis posuere pulvinar, erat ex laoreet odio, nec dignissim sapien massa nec est. Sed sodales sapien et neque maximus cursus."
    },
    {
        "name": "Calm Waters",
        "width": 791,
        "height": 1024,
        "source": "/images/2.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus vitae sapien ullamcorper rutrum nec sed enim. Donec id ligula dolor. Integer fringilla eget nisi sit amet lobortis. Nunc arcu mauris, aliquam non quam sed, vestibulum sollicitudin quam. Nunc viverra massa et dui euismod luctus. Donec tincidunt, est quis posuere pulvinar, erat ex laoreet odio, nec dignissim sapien massa nec est. Sed sodales sapien et neque maximus cursus."
    },
    {
        "name": "A Face Worth A Thousand Expressions",
        "width": 791,
        "height": 1024,
        "source": "/images/3.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus vitae sapien ullamcorper rutrum nec sed enim. Donec id ligula dolor. Integer fringilla eget nisi sit amet lobortis. Nunc arcu mauris, aliquam non quam sed, vestibulum sollicitudin quam. Nunc viverra massa et dui euismod luctus. Donec tincidunt, est quis posuere pulvinar, erat ex laoreet odio, nec dignissim sapien massa nec est. Sed sodales sapien et neque maximus cursus."
    },
    {
        "name": "Holy Motherhood",
        "width": 791,
        "height": 1024,
        "source": "/images/4.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus vitae sapien ullamcorper rutrum nec sed enim. Donec id ligula dolor. Integer fringilla eget nisi sit amet lobortis. Nunc arcu mauris, aliquam non quam sed, vestibulum sollicitudin quam. Nunc viverra massa et dui euismod luctus. Donec tincidunt, est quis posuere pulvinar, erat ex laoreet odio, nec dignissim sapien massa nec est. Sed sodales sapien et neque maximus cursus."
    },
    {
        "name": "Caring For Each Other",
        "width": 791,
        "height": 791,
        "source": "/images/5.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus vitae sapien ullamcorper rutrum nec sed enim. Donec id ligula dolor. Integer fringilla eget nisi sit amet lobortis. Nunc arcu mauris, aliquam non quam sed, vestibulum sollicitudin quam. Nunc viverra massa et dui euismod luctus. Donec tincidunt, est quis posuere pulvinar, erat ex laoreet odio, nec dignissim sapien massa nec est. Sed sodales sapien et neque maximus cursus."
    }
].map(
    ({ asset, source, width, height }) =>
        ({
            src: source,
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
                src: source,
                width: breakpoint,
                height: Math.round((height / width) * breakpoint),
            })),
        }
    )
);

export default photos;