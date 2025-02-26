{
    inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-24.11";
    outputs = { self, nixpkgs }:
    let
        pkgs = import nixpkgs { system = "x86_64-linux"; };

        NPM_CONFIG_PREFIX = toString ./npm_config_prefix;
    in 
    {
        devShell.x86_64-linux = pkgs.mkShell {
            buildInputs = [
                pkgs.nodejs_20
                pkgs.typescript
                pkgs.nodePackages.gatsby-cli
                # pkgs.gh-pages.npm
            ];

          inherit NPM_CONFIG_PREFIX;

          shellHook = ''
            export PATH="${NPM_CONFIG_PREFIX}/bin:$PATH"
          '';
        };
    };
}
