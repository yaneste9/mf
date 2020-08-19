import * as React from 'react';
import Layout from './layout';

export interface TemplateProps {
  staticVersion: number;
}

const Template: React.FC<TemplateProps> = ({ staticVersion }) => <Layout staticVersion={staticVersion} />;

export default Template;
