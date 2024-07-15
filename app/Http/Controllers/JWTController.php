<?php

namespace App\Http\Controllers;

use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Auth;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;
use Firebase\JWT\BeforeValidException;
use Illuminate\Validation\ValidationException;

class JWTController extends Controller
{
    protected mixed $key;
    protected mixed $iss;
	protected array $algorithm;
	protected int $iat;
	protected int|float $exp;
	public function __construct()
	{
		$this->key = env('JWT_SECRET'); // Establecer llave secreta
		$this->iss = env('APP_URL'); // Establecer llave secreta
		$this->algorithm = ['HS512']; // Establecer algoritmo de codificación
		$this->iat = time(); // Establecer tiempo de inicio a ahora
		$this->exp = $this->iat + 60 * 60; // Establecer expiración a 1 hora desde ahora
	}

	// generar un jsonn response del token
    public function response(string $token): \Illuminate\Http\JsonResponse
	{
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->exp
        ]);
    }

	/**
	 * @throws ValidationException
	 */
	// Refresca el token de sessión del usuario
	public function refresh(string $tokenOriginal): \Illuminate\Http\JsonResponse
	{
		$this->validateToken($tokenOriginal, true);
		$user = Auth::user();

		if($user !== null){
			$token = $this->jwt($user);
			return $this->response($token);
		}
		return response()->json([
            "error" => "La sesión expiro",
        ], 419);
	}

	// generar token apartir de usuario
    public function jwt(mixed $user): string
	{
        return JWT::encode([
            'iss' => $this->iss,
            'sub' => $user->id,
            'iat' => $this->iat,
            'exp' => $this->exp
        ], $this->key, $this->algorithm[0]);
    }

	// valida el token y puede cierrar la sesión
    public function validateToken(string $token, bool $closeSesionIfCatch): \Illuminate\Http\JsonResponse|array
	{
        try {
            $payload = (array) JWT::decode($token, $this->key, $this->algorithm[0]);
        } catch (ExpiredException $e) {

			if ($closeSesionIfCatch){
				Auth::logout();
			}

            return response()->json(['error' => 'Token expired'], 400);

        } catch (SignatureInvalidException $e) {

            if ($closeSesionIfCatch){
				Auth::logout();
			}

            return response()->json(['error' => 'Invalid token signature'], 400);

        } catch (BeforeValidException $e) {

            if ($closeSesionIfCatch){
				Auth::logout();
			}

            return response()->json(['error' => 'Token not valid yet'], 400);

        }

		return $payload;
    }

	// codificar token jwt a partir de data
	public function encode(mixed $data): string
	{
        return JWT::encode([
            'iss' => $this->iss,
            'sub' => $data,
            'iat' => $this->iat,
            'exp' => $this->exp
        ], $this->key, $this->algorithm[0]);
    }

	// decodificar token jwt
	public function decode(string $token): array
	{
		return (array) JWT::decode($token, new Key($this->key, $this->algorithm[0]));
	}
}
