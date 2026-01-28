param (
    [Parameter(Mandatory=$true)]
    [string]$CertName,

    [Parameter(Mandatory=$true)]
    [string]$Password
)

# Diretório de saída do certificado
$ServerCertDir = "../server/certificate"
$ClientCertDir = "../client/certificate"

# Criar a pasta se não existir
if (-not (Test-Path $ServerCertDir)) {
    Write-Host "Criando pasta para certificados servidor: $ServerCertDir"
    New-Item -ItemType Directory -Path $ServerCertDir | Out-Null
}

# Criar a pasta se não existir
if (-not (Test-Path $ClientCertDir)) {
    Write-Host "Criando pasta para certificados cliente: $ClientCertDir"
    New-Item -ItemType Directory -Path $ClientCertDir | Out-Null
}

# Caminhos dos arquivos
$PfxPath = Join-Path $ServerCertDir "$CertName.pfx"
$CertPemPath = Join-Path $ClientCertDir "$CertName.cert.pem"
$KeyPemPath = Join-Path $ClientCertDir "$CertName.key.pem"

# Gerar PFX para .NET
Write-Host "Gerando certificado PFX em: $PfxPath"
dotnet dev-certs https -ep $PfxPath -p $Password

if (-not (Test-Path $PfxPath)) {
    Write-Host "Falha ao gerar o PFX." -ForegroundColor Red
    exit 1
}

Write-Host "Certificado PFX gerado com sucesso."

# Extrair key.pem e cert.pem do PFX para React/Vite
Write-Host "Extraindo key.pem e cert.pem..."
openssl pkcs12 -in $PfxPath -nocerts -nodes -passin pass:$Password -out $KeyPemPath
openssl pkcs12 -in $PfxPath -clcerts -nokeys -passin pass:$Password -out $CertPemPath

if ((Test-Path $KeyPemPath) -and (Test-Path $CertPemPath)) {
    Write-Host "Arquivos key.pem e cert.pem gerados com sucesso em $CertDir."
} else {
    Write-Host "Falha ao gerar key.pem e cert.pem." -ForegroundColor Red
}