import Image from "next/image";

const MediaImage = ({ name, data, width, height }) => {
    const mediasData = data?.data?.length > 0 && data?.data[0] && data?.data[0].attributes?.medias ? data?.data[0].attributes?.medias : {};
    const medias = mediasData?.data || [];
    const media = (medias.find((m) => m.attributes.name === name) || {}).attributes || {};
    return <Image src={media.url} alt={media.alternativeText} width={width || media.width} height={height || media.height} />
}
export default MediaImage;
