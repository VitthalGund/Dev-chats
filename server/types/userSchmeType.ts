import { JwtPayload } from "jsonwebtoken";
export type userSchemaType = {
  avatar: {
    localPath: string;
    type: {
      url: string;
      localPath: string;
    };
    default: {
      url: string;
      localPath: string;
    };
  };
  username: string;
  email: string;
  role: string;
  password: string;
  loginType: string;
  isEmailVerified: boolean;
  refreshToken: string;
  forgotPasswordToken: string | undefined;
  forgotPasswordExpiry: Date | undefined;
  emailVerificationToken: string | undefined;
  emailVerificationExpiry: Date | undefined;
  timestamps: string;
  isPasswordCorrect: (password: string) => boolean;
  generateAccessToken: () => string;
  generateRefreshToken: () => string;
  generateTemporaryToken: () => {
    unHashedToken: string;
    hashedToken: string;
    tokenExpiry: string;
  };
};

export type CustomJwtPayload = {
  _id: string;
} & JwtPayload;
