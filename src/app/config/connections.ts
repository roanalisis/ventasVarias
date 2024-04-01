import { DatoCMSConfig } from './constans';
import { SiteClient } from 'datocms-client';

export const datoDevCMS = new
SiteClient( DatoCMSConfig.DATO_KEY, {
  environment: DatoCMSConfig.DATO_DEV_ENVIRONMENT
});
