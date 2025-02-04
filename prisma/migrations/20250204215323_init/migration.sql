-- CreateTable
CREATE TABLE "urls" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "short" VARCHAR(6) NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_short_key" ON "urls"("short");

-- CreateIndex
CREATE INDEX "urls_short_idx" ON "urls"("short");
