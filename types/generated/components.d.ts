import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
    icon: 'grid';
  };
  attributes: {
    copyrightText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    linksColumn1: Schema.Attribute.Component<'blocks.hero-section', true>;
    linksColumn2: Schema.Attribute.Component<'blocks.hero-section', true>;
    linksColumn3: Schema.Attribute.Component<'blocks.logo-link', true>;
  };
}

export interface BlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'Header';
    icon: 'apps';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    navigation_links: Schema.Attribute.Component<'blocks.hero-section', true>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'LinkMenu';
    icon: 'bulletList';
  };
  attributes: {
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isOpenNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface BlocksLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logo_links';
  info: {
    displayName: 'Image Link';
    icon: 'emotionHappy';
  };
  attributes: {
    alt: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card': BlocksCard;
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.logo-link': BlocksLogoLink;
    }
  }
}
