import ArcConfig from './arc/ArcConfig'
import ArcEnvironment from './arc/ArcEnvironment'

const config: ArcConfig = {
  /**
   * Arc Environments
   *
   * For an Arc site accessed at dmn.arcpublishing.com,
   * the environment name would be "dmn"
   *
   * Domains are specified as regular expressions matched against the host
   *
   * You only need to specifiy custom domains as the Arc domain is inferred
   * from the environment name and the Arc base domain
   */
  environments: [
    new ArcEnvironment('dmn', [/^(www\.)?dallasnews\.com$/]),
    new ArcEnvironment('sandbox.dmn', [
      /^staging\.dallasnews\.com$/,
      /^local(host)?\.dallasnews\.com$/,
      /^localhost(:\d+)?$/,
    ]),
    new ArcEnvironment('dmndev.dmn', []),
    new ArcEnvironment('dev.dmn', []),
  ],
}

export default config
