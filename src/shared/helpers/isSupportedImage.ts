import SUPPORTED_FILES from "../constants/images/formats"

const isSupportedImage = (image: string) => SUPPORTED_FILES.includes(image.split('.').pop() as string)

export default isSupportedImage