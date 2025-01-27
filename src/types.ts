import { Devvit } from '@devvit/public-api';

// Type definition for CustomPostRenderContext
export type CustomPostRenderContext = Parameters<Parameters<typeof Devvit.addCustomPostType>[0]['render']>[0]; 