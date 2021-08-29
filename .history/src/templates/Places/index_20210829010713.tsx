type ImageProps = {
  url: string;
  height: number;
  width: number;
}

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({place}: PlacesTemplateProps){
  return()
}
