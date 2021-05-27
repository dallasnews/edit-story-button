const arcBaseDomain = 'arcpublishing.com'

class ArcEnvironment {
  name: string
  domains?: Array<RegExp>
  baseDomain: string
  composerBaseUrl: string

  constructor(envName: string, domains?: Array<RegExp>, baseDomain?: string) {
    this.name = envName
    this.domains = domains
    this.baseDomain = baseDomain || arcBaseDomain
    this.composerBaseUrl = this.makeComposerBaseUrl()
  }

  makeComposerBaseUrl = () =>
    `https://${this.name}.${this.baseDomain}/composer/#!/edit`
}

export { arcBaseDomain, ArcEnvironment as default }
