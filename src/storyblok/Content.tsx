import * as React from 'react'
import type {
  CardsContent,
  Content,
  HeroContent,
  PageContent,
  TestimonialContent,
  TestimonialsContent,
  TabsContent,
  TeamMembersContent,
  CardContent,
  ButtonContent,
  OllisNewUniversalBlockContent,
} from '../content/content-model'
import Page from './Page'
import Testimonials from './Testimonials'
import Testimonial from './Testimonial'
import Cards from './Cards'
import Hero from './Hero'
import Tabs from './Tabs'
import Card from './Card'
import Button from './Button'
import OllisNewUniversalBlock from './OllisNewUniversalBlock'

export type ContentProps = {
  blok: Content
}

function Content(props: ContentProps) {
  return (
    <>
      {props.blok.component === 'page' ? (
        <Page blok={props.blok as PageContent} />
      ) : null}
      {props.blok.component === 'testimonials' ? (
        <Testimonials blok={props.blok as TestimonialsContent} />
      ) : null}
      {props.blok.component === 'testimonial' ? (
        <Testimonial blok={props.blok as TestimonialContent} />
      ) : null}
      {props.blok.component === 'cards' ? (
        <Cards blok={props.blok as CardsContent} />
      ) : null}
      {props.blok.component === 'card' ? (
        <Card blok={props.blok as CardContent} />
      ) : null}
      {props.blok.component === 'hero' ? (
        <Hero blok={props.blok as HeroContent} />
      ) : null}
      {props.blok.component === 'tabs' ? (
        <Tabs blok={props.blok as TabsContent} />
      ) : null}
      {props.blok.component === 'teamMembers' ? (
        <TeamMembers blok={props.blok as TeamMembersContent} />
      ) : null}
      {props.blok.component === 'button' ? (
        <Button blok={props.blok as ButtonContent} />
      ) : null}
      {props.blok.component === 'ollis-new-universal-block' ? (
        <OllisNewUniversalBlock blok={props.blok as OllisNewUniversalBlockContent} />
      ) : null}
    </>
  )
}

export default Content
