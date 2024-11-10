{

  # Packages Sources
  inputs = {

    # Base URL
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.05";

  };

  # Deployed Packages
  outputs = { ... }: {

    # Development Env
    devShells.default = pkgs.mkShell {
      packages = with pkgs; [ nodejs yarn];
    };

  };
}